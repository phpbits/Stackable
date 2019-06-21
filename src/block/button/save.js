import { BlockContainer, ButtonEdit } from '@stackable/components'
import { withBlockStyles, withUniqueClass } from '@stackable/higher-order'
import { applyFilters } from '@wordpress/hooks'
import classnames from 'classnames'
import { compose } from '@wordpress/compose'
import createStyles from './style'
import { Fragment } from '@wordpress/element'

const save = props => {
	const { className, attributes } = props
	const {
		design = 'plain',
		tabletContentAlign = '',
		mobileContentAlign = '',
		collapseOn = '',
		showButton2 = false,
		showButton3 = false,
		button1Size = 'normal',
		button1Text = '',
		button1Shadow = 0,
		button1HoverEffect = '',
		button1Icon = '',
		button1IconPosition = '',
		button1NewWindow = false,
		button1NoFollow = false,
		button1Url = '',
		button1Design = 'basic',
		button2Size = 'normal',
		button2Text = '',
		button2Shadow = 0,
		button2HoverEffect = '',
		button2Icon = '',
		button2IconPosition = '',
		button2NewWindow = false,
		button2NoFollow = false,
		button2Url = '',
		button2Design = 'basic',
		button3Size = 'normal',
		button3Text = '',
		button3Shadow = 0,
		button3HoverEffect = '',
		button3Icon = '',
		button3IconPosition = '',
		button3NewWindow = false,
		button3NoFollow = false,
		button3Url = '',
		button3Design = 'basic',
	} = attributes

	const mainClasses = classnames( [
		className,
	], applyFilters( 'stackable.button.mainclasses', {
		'ugb-button--tablet-aligned': tabletContentAlign !== '',
		'ugb-button--mobile-aligned': mobileContentAlign !== '',
		[ `ugb-button--collapse-${ collapseOn }` ]: collapseOn,
		[ `ugb-button--design-${ design }` ]: design !== 'basic',
	}, design, props ) )

	return (
		<BlockContainer.Save className={ mainClasses } blockProps={ props } render={ () => (
			<Fragment>
				<ButtonEdit.Content
					className="ugb-button1"
					size={ button1Size !== '' ? button1Size : 'normal' }
					text={ button1Text }
					icon={ button1Icon }
					newTab={ button1NewWindow !== '' && button1NewWindow }
					url={ button1Url }
					noFollow={ button1NoFollow }
					hoverEffect={ button1HoverEffect }
					shadow={ button1Shadow }
					iconPosition={ button1IconPosition }
					design={ button1Design !== '' ? button1Design : 'basic' }
				/>
				{ showButton2 &&
					<ButtonEdit.Content
						className="ugb-button2"
						size={ button2Size !== '' ? button2Size : 'normal' }
						text={ button2Text }
						icon={ button2Icon }
						newTab={ button2NewWindow !== '' && button2NewWindow }
						url={ button2Url }
						noFollow={ button2NoFollow }
						hoverEffect={ button2HoverEffect }
						shadow={ button2Shadow }
						iconPosition={ button2IconPosition }
						design={ button2Design !== '' ? button2Design : 'basic' }
					/>
				}
				{ showButton3 &&
					<ButtonEdit.Content
						className="ugb-button3"
						size={ button3Size !== '' ? button3Size : 'normal' }
						text={ button3Text }
						icon={ button3Icon }
						newTab={ button3NewWindow !== '' && button3NewWindow }
						url={ button3Url }
						noFollow={ button3NoFollow }
						hoverEffect={ button3HoverEffect }
						shadow={ button3Shadow }
						iconPosition={ button3IconPosition }
						design={ button3Design !== '' ? button3Design : 'basic' }
					/>
				}
			</Fragment>
		) } />
	)
}

export default compose(
	withUniqueClass,
	withBlockStyles( createStyles ),
)( save )
