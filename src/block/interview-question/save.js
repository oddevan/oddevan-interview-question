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
				tagName="div"
				multiline="p"
				className='question'
				value={ question }
			/>
			<RichText.Content
				tagName="div"
				multiline="p"
				className='answer'
				value={ answer }
			/>
		</div>
	);
};

export default Save;
