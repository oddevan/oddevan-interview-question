/**
 * REGISTER: oddEvan Interview Question.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'oddevan/interview-question', {
	title: __( 'Interview Question', 'interview-question' ),
	icon: 'edit',
	category: 'formatting',
	keywords: [
		__( 'oddEvan', 'interview-question' ),
	],
	attributes: {
		question: {
			type: 'array',
			source: 'children',
			selector: 'div.question',
		},
		answer: {
			type: 'array',
			source: 'children',
			selector: 'div.answer',
		},
	},
	edit,
	save,
} );
