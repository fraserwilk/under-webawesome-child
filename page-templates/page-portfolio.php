<?php
/**
 * Template Name: Portfolio Item Display
 * Template Post Type: page, post, portfolio
 *
 * This template is specifically designed to display the fields
 * from the 'Portfolio fields' ACF Field Group.
 */

get_header(); ?>

<div id="primary" class="content-area container">

    <main id="main" class="site-main">
        <?php
				if ( have_posts() ) {
					// Start the Loop.
					while ( have_posts() ) {
						the_post();
                        the_content(); // This outputs the main page content
                    }
                }
        
        // Check for the parent Flexible Content field 'content'
        if ( have_rows('content') ) :
            while ( have_rows('content') ) : the_row();

                // Check for the 'columns_section' layout
                if ( get_row_layout() == 'columns_section' ) :

                    // Get the Repeater field, which is an array of all your portfolio items
                    $portfolio_items = get_sub_field('columns');

                    // Check if there are any items to display
                    if ( $portfolio_items ) :
                        // A wrapper for easy CSS styling (e.g., with Flexbox or Grid)
                        echo '<div class="testimonial-grid">';

                        // Loop through each item (each card) in the Repeater
                        foreach ( $portfolio_items as $item ) :
                            // All your data for one card is now in the $item array
                            ?>
                            <div class="testimonial flow bg-grey-100 bg-opacity-25">

                                <?php // Screenshot (Image Field) ?>
                                <?php if ( ! empty( $item['image'] ) ) :
                                    $screenshot = $item['image']; ?>
                                    <div class="card-image-top">
                                        <img class="border-primary-400" src="<?php echo esc_url( $screenshot['url'] ); ?>" alt="<?php echo esc_attr( $screenshot['alt'] ); ?>" />
                                    </div>
                                <?php endif; ?>

                                <div class="name">
                                    <?php // Title (Text Field) ?>
                                    <?php if ( ! empty( $item['title'] ) ) : ?>
                                        <h2 class="card-title"><?php echo esc_html( $item['title'] ); ?></h2>
                                    <?php endif; ?>

                                    <?php // Sub Title (Text Field) ?>
                                    <?php if ( ! empty( $item['sub_title'] ) ) : ?>
                                        <h3 class="position"><?php echo esc_html( $item['sub_title'] ); ?></h3>
                                    <?php endif; ?>
                                    
                                    <?php // Summary (Text Area Field) ?>
                                    <?php if ( ! empty( $item['summary'] ) ) : ?>
                                        <p class="card-text">
                                            <?php echo wpautop( esc_textarea( $item['summary'] ) ); ?>
                                        </p>
                                    <?php endif; ?>
                                </div>

                                <div class="card-body">
                                    <?php // Launch Date (Date Picker Field) ?>
                                    <?php if ( ! empty( $item['launch_date'] ) ) :
                                        $date_object = DateTime::createFromFormat('d/m/Y', $item['launch_date']);
                                        if ($date_object) { ?>
                                            <span class="card-date">
                                                Launched: <?php echo $date_object->format('F Y'); ?>
                                            </span>
                                        <?php }
                                    endif; ?>
                                    
                                    <?php // Website Link (URL Field) ?>
                                    <?php if ( ! empty( $item['website_link'] ) ) : ?>
                                        <a class="card-link" href="<?php echo esc_url( $item['website_link'] ); ?>" target="_blank" rel="noopener noreferrer">Visit Site</a>
                                    <?php endif; ?>
                                </div>

                            </div>
                            <?php
                                endforeach; // End of the card loop

                            echo '</div>';
                    endif; // End check for $portfolio_items
                endif; // End of 'columns_section' layout check
            endwhile; // End of Flexible Content loop
        endif; // End check for 'content'
        ?>
    </main>
</div>
<?php get_footer(); ?>