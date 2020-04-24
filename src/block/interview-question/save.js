/**
 * SAVE: oddEvan Interview Question
 */
import { RichText } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: {
			question,
			answer
		},
		className,
	} = props;

	return (
		<div className={ className }>
			<RichText.Content
				tagName="p"
				className='question'
				value={ question }
			/>
			<RichText.Content
				tagName="p"
				className='answer'
				value={ answer }
			/>
		</div>
	);
};

export default Save;
