/**
 * EDIT: oddEvan Interview Question
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {
	const {
		attributes: {
			question,
			answer
		},
		className,
		setAttributes,
	} = props;

	return (
		<div className={ className }>
			<RichText
				tagName="p"
				className='question'
				onChange={ (newQuestion) => setAttributes( { question: newQuestion } ) }
				value={ question }
				placeholder={ __( 'Question?', 'interview-question' ) }
			/>
			<RichText
				tagName="p"
				className='answer'
				onChange={ (newAnswer) => setAttributes( { answer: newAnswer } ) }
				value={ answer }
				placeholder={ __( 'Answer.', 'interview-question' ) }
			/>
		</div>
	);
};

export default Edit;
