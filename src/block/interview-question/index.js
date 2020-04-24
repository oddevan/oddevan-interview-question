/**
 * REGISTER: oddEvan Interview Question.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'oddevan/interview-question', {
	title: __( 'oddEvan Interview Question', 'interview-question' ),
	icon: 'edit',
	category: 'common',
	keywords: [
		__( 'oddEvan', 'interview-question' ),
		__( 'interview-question', 'interview-question' ),
	],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit,
	save,
} );