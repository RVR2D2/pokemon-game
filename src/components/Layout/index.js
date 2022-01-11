import s from './layout.module.css'
import cn from 'classnames'

const Layout = ({title, children, urlBg, colorBg, colorTitle}) => {
	const sectionStyle = {}
	const sectionTitleColor = {}
	
	if (urlBg) {
		sectionStyle.backgroundImage = `url(${urlBg})`
	}
	
	if (colorBg) {
		sectionStyle.background = colorBg
	}
	
	if (colorTitle) {
		sectionTitleColor.color = colorTitle
	}
	
	return (
		<section style={sectionStyle} className={cn(s.root)}>
			<div className={cn(s.wrapper)}>
				<article>
					<div style={sectionTitleColor} className={cn(s.title)}>
						{title && <h3>
							{title}
						</h3>}
						<span className={cn(s.separator)}></span>
					</div>
					<div className={cn(s.desc, s.full)}>
						{children && <p>
							{children}
						</p>}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Layout;
