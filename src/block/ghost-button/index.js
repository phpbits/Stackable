/**
 * BLOCK: Ghost Button Block.
 */

import { GhostButtonIcon } from '@stackable/icons'

const schema = {
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	text: {
		source: 'html',
		selector: 'a',
	},
	align: {
		type: 'string',
		default: 'center',
	},
	color: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	size: {
		type: 'string',
		default: 'normal',
	},
	cornerButtonRadius: {
		type: 'number',
		default: '4',
	},
	borderThickness: {
		type: 'number',
		default: '1',
	},
}

export const name = 'ugb/ghost-button'

export const settings = {
	title: 'Ghost Button',
	description: 'A customizable button with a ghost design (deprecated, use the button instead and set the design to "ghost")',
	icon: GhostButtonIcon,
	category: 'stackable',
	keywords: [
		'Ghost Button',
		'Stackable',
	],
	attributes: schema,

	// Hide! See readme.
	supports: {
		inserter: false,
	},

	// Stackable-specific settings.
	sDeprecated: true,
}
