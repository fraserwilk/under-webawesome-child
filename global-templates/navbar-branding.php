<?php
/**
 * Navbar branding
 *
 * @package Understrap
 * @since 1.2.0
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! has_custom_logo() ) { ?>

	<?php if ( is_front_page() && is_home() ) : ?>

		<h1 class="navbar-brand mb-0">
			<a rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" itemprop="url">
				<?php bloginfo( 'name' ); ?>
			</a>
		</h1>

	<?php else : ?>

		<a class="navbar-brand" rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" itemprop="url">
			<?php bloginfo( 'name' ); ?>
		</a>

	<?php endif; ?>

	<?php
} else {
	echo '<a class="navbar-brand" rel="home" href="' . esc_url( home_url( '/' ) ) . '" itemprop="url">';
		if ( has_custom_logo() ) {
		// Get the attachment ID of the custom logo.
		$custom_logo_id = get_theme_mod( 'custom_logo' );

		// Get the <img> tag for the logo by its ID.
		// This gives you just the image, not the link surrounding it.
		echo wp_get_attachment_image( $custom_logo_id, 'full', false, array(
			'class' => 'custom-logo', // Retain the default class for styling.
		) );
	}

	// Display the site name inside the same anchor tag.
	echo '<span class="navbar-brand-name">' . esc_html( get_bloginfo( 'name' ) ) . '</span>';

	// Close the main anchor tag.
	echo '</a>';
}
