/**
 * BLOCK: pageheader-imagetext
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { MediaUpload, InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Button } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("cgb/block-pageheader-imagetext", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("pageheader-imagetext - CGB Block"), // Block title.
	icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("pageheader-imagetext — CGB Block"),
		__("CGB Example"),
		__("create-guten-block")
	],
	attributes: {
		backgroundImage: {
			type: "string",
			default: null // no image by default!
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function({ attributes, className, setAttributes }) {
		const getImageButton = openEvent => {
			return (
				<Button onClick={openEvent} className="button button-large">
					Pick an image
				</Button>
			);
		};

		return (
			<div
				className="pageheader pageheader--imagetext"
				style={{
					backgroundImage: `url(${attributes.backgroundImage})`
				}}
			>
				<MediaUpload
					onSelect={media => {
						setAttributes({ backgroundImage: media.url });
					}}
					type="image"
					value={attributes.imageID}
					render={({ open }) => getImageButton(open)}
				/>
				<InnerBlocks
					allowedBlocks={["core/heading", "core/paragraph"]}
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function({ attributes }) {
		const { backgroundImage } = attributes;

		return (
			<div
				className="pageheader pageheader--imagetext"
				style={{
					backgroundImage: `url(${attributes.backgroundImage})`
				}}
			>
				<div class="txt">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});
