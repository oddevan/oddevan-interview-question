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
			<h6>{ __( 'Question:', 'oddevan-interview-question' ) }</h6>
			<RichText
				tagName="div"
				multiline="p"
				className='question'
				onChange={ (newQuestion) => setAttributes( { question: newQuestion } ) }
				value={ question }
				placeholder={ __( 'Question?', 'oddevan-interview-question' ) }
			/>
			<h6>{ __( 'Answer:', 'oddevan-interview-question' ) }</h6>
			<RichText
				tagName="div"
				multiline="p"
				className='answer'
				onChange={ (newAnswer) => setAttributes( { answer: newAnswer } ) }
				value={ answer }
				placeholder={ __( 'Answer.', 'oddevan-interview-question' ) }
			/>
		</div>
	);
};

export default Edit;
