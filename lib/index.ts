/**
 * Experiments with solid state relays (SSRs) as published at:
 * https://pdcastro.github.io/mains-io
 *
 * The logic monitors a Raspberry Pi GPIO input pin to reproduce its logic
 * state to an output pin. The `array-gpio` npm library is used for the
 * hardware interface: https://www.npmjs.com/package/array-gpio
 */

/**
 * Reminder of the default state of the built-in, configurable pull-up/down
 * resistors when the Pi boots:
 * - GPIO pins 0-8 are pulled up by default.
 * - GPIO pins 9-27 are pulled down by default.
 * These are logical GPIO pin numbers, not physical pin numbers. For example,
 * GPIO pin 8 maps to physical pin 24. The `array-gpio` npm library uses
 * physical pin numbers though. References:
 * - https://datasheets.raspberrypi.com/bcm2835/bcm2835-peripherals.pdf
 * - https://datasheets.raspberrypi.com/bcm2711/bcm2711-peripherals.pdf
 * - https://raspberrypi.stackexchange.com/questions/113571/which-rpi-pins-are-pulled-up-or-down-during-startup
 * - https://www.google.com/search?q=raspberry+pi+pin+numbers
 */

const SSR_INPUT_PIN = 19; // a.k.a. GPIO pin 10, default pull down
const SSR_OUTPUT_PIN = 23; // a.k.a. GPIO pin 11

function watchInput() {
	const aio = require('array-gpio');
	const ssrInput = aio.in(SSR_INPUT_PIN);
	const ssrOutput = aio.out(SSR_OUTPUT_PIN);

	ssrInput.setR('pd'); // Confirm/ensure a pull-down resistor is used
	ssrOutput.write(ssrInput.read()); // Initialize the output state

	// Watch for input changes
	ssrInput.watch((state: boolean) => {
		ssrOutput.write(state);
		console.log(`New SSR state: ${state}`);
	});
}

function run() {
	watchInput();
}

run();
