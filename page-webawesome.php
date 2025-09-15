<?php
/**
 * Template Name: Web Awesome Demo
 * Description: A full showcase of Web Awesome components inside Understrap Child.
 *
 * @package UnderstrapChild
 */

get_header();
?>

<main id="primary" class="site-main container py-5">

  <h1 class="mb-5 text-center">🚀 Web Awesome Component Showcase</h1>

  <!-- Buttons -->
  <section class="mb-5">
    <h2>Buttons</h2>
    <div class="d-flex flex-wrap gap-2">
      <wa-button variant="primary">Primary</wa-button>
      <wa-button variant="success">Success</wa-button>
      <wa-button variant="warning">Warning</wa-button>
      <wa-button variant="danger">Danger</wa-button>
      <wa-button variant="neutral" outline>Outline</wa-button>
      <wa-button size="small">Small</wa-button>
      <wa-button size="large">Large</wa-button>
    </div>
  </section>

  <!-- Cards -->
  <section class="mb-5">
    <h2>Card</h2>
    <wa-card style="max-width: 420px;">
      <div slot="header" class="wa-split">
        <h3 class="mb-0">Launch Card</h3>
        <wa-icon name="rocket" variant="solid"></wa-icon>
      </div>
      
        Cards can hold text, buttons, or any other Web Awesome components.
      
      <div slot="footer">
        <wa-button variant="brand">Action</wa-button>
      </div>
    </wa-card>
  </section>

  <!-- Divider -->
  <section class="mb-5">
      <div style="text-align: center;">
        Divider - above
        <wa-divider style="--spacing: 2rem; --color: tomato;"></wa-divider>
        Divider - Below
      </div>
    </section>


  <!-- Inputs -->
  <section class="mb-5">
    <h2>Form Inputs</h2>
    <form class="d-flex flex-column gap-3" style="max-width: 420px;">
      <wa-input label="Your Name" placeholder="Enter name"></wa-input>
      <wa-input type="email" label="Email Address" placeholder="Enter email"></wa-input>
      <wa-textarea label="Message" placeholder="Type your message"></wa-textarea>
      <wa-checkbox>Subscribe to newsletter</wa-checkbox>
      <wa-button type="submit" variant="primary">Submit</wa-button>
    </form>
  </section>

  <!-- Modal -->
  <section class="mb-5">
    <h2>Modal Example</h2>
    <wa-dialog id="demoModal" label="Dialog" light-dismiss class="dialog-light-dismiss">
      <p>This is a Web Awesome modal inside your WordPress site 🎉</p>
      <wa-button slot="footer" data-dialog="close" variant="brand">Close Modal</wa-button>
    </wa-dialog>

    <wa-button>Open Dialog</wa-button>

    <script type="module">
      const dialog = document.querySelector('.dialog-light-dismiss');
      const openButton = dialog.nextElementSibling;

      openButton.addEventListener('click', () => (dialog.open = true));
    </script>
  </section>

  <!-- Divider -->
  <section class="mb-5">
      <div style="text-align: center;">
        Divider - above
        <wa-divider style="--spacing: 2rem; --color: tomato;"></wa-divider>
        Divider - Below
      </div>
    </section>

  <!-- Drawer -->
  <section class="mb-5">
    <h2>Drawer Example</h2>
    <p>Drawers slide in from the side and can be closed by clicking outside.</p>
  
    <wa-drawer label="Drawer" light-dismiss class="drawer-light-dismiss">
    This drawer will close when you click on the overlay.
    <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
    </wa-drawer>

    <wa-button>Open Drawer</wa-button>

    <script>
      const drawer = document.querySelector('.drawer-light-dismiss');
      const openButton = drawer.nextElementSibling;

      openButton.addEventListener('click', () => (drawer.open = true));
    </script>
  </section>
  
  <!-- Divider -->
  <section class="mb-5">
      <div style="text-align: center;">
        Divider - above
        <wa-divider style="--spacing: 2rem; --color: tomato;"></wa-divider>
        Divider - Below
      </div>
    </section>


  <section class="mb-5">
    <wa-popover for="popover__overview">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <p>This popover contains interactive content that users can engage with directly.</p>
        <wa-button variant="primary" size="small">Take Action</wa-button>
      </div>
    </wa-popover>

    <wa-button id="popover__overview">Show popover</wa-button>
  </section>

  <!-- Divider -->
  <section class="mb-5">
      <div style="text-align: center;">
        Divider - above
        <wa-divider style="--spacing: 2rem; --color: tomato;"></wa-divider>
        Divider - Below
      </div>
    </section>

    <section class="mb-5">
      <wa-carousel class="carousel-thumbnails" navigation loop>
        <wa-carousel-item>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          />
        </wa-carousel-item>
        <wa-carousel-item>
          <img
            alt="A river winding through an evergreen forest (by Luca Bravo on Unsplash)"
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10"
          />
        </wa-carousel-item>
        <wa-carousel-item>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10"
          />
        </wa-carousel-item>
        <wa-carousel-item>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10"
          />
        </wa-carousel-item>
        <wa-carousel-item>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10"
          />
        </wa-carousel-item>
      </wa-carousel>

      <div class="thumbnails">
        <div class="scroller">
          <img
            alt="Thumbnail by 1"
            class="image active"
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=10"
          />
          <img alt="Thumbnail by 2" class="image" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=10" />
          <img alt="Thumbnail by 3" class="image" src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=10" />
          <img alt="Thumbnail by 4" class="image" src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=10" />
          <img alt="Thumbnail by 5" class="image" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=10" />
        </div>
      </div>

      <style>
        .carousel-thumbnails {
          --slide-aspect-ratio: 3 / 2;
        }

        .thumbnails {
          display: flex;
          justify-content: center;
        }

        .scroller {
          display: flex;
          gap: var(--wa-space-s);
          overflow-x: auto;
          scrollbar-width: none;
          scroll-behavior: smooth;
          scroll-padding: var(--wa-space-s);
        }

        .scroller::-webkit-scrollbar {
          display: none;
        }

        .image {
          width: 64px;
          height: 64px;
          object-fit: cover;

          opacity: 0.3;
          will-change: opacity;
          transition: 250ms opacity;

          cursor: pointer;
        }

        .image.active {
          opacity: 1;
        }
      </style>

      <script>
        {
          const carousel = document.querySelector('.carousel-thumbnails');
          const scroller = document.querySelector('.scroller');
          const thumbnails = document.querySelectorAll('.image');

          scroller.addEventListener('click', e => {
            const target = e.target;

            if (target.matches('.image')) {
              const index = [...thumbnails].indexOf(target);
              carousel.goToSlide(index);
            }
          });

          carousel.addEventListener('wa-slide-change', e => {
            const slideIndex = e.detail.index;

            [...thumbnails].forEach((thumb, i) => {
              thumb.classList.toggle('active', i === slideIndex);
              if (i === slideIndex) {
                thumb.scrollIntoView({
                  block: 'nearest',
                });
              }
            });
          });
        }
      </script>
  </section>

    <!-- Divider -->
  <section class="mb-5">
      <div style="text-align: center;">
        Divider - above
        <wa-divider style="--spacing: 2rem; --color: tomato;"></wa-divider>
        Divider - Below
      </div>
    </section>

    <section class="mb-5">
      <h2>QR Code with Dynamic Input</h2>
      <p>Scan the QR code or change the input value to see it update in real-time.</p>
      <div class="qr-overview">
        <wa-qr-code value="https://shoelace.style/" label="Scan this code to visit Web Awesome on the web!"></wa-qr-code>
        <br />

        <wa-input maxlength="255" with-clear label="Value">
          <wa-icon slot="start" name="link"></wa-icon>
        </wa-input>
      </div>

      <script>
        const container = document.querySelector('.qr-overview');
        const qrCode = container.querySelector('wa-qr-code');
        const input = container.querySelector('wa-input');

        customElements.whenDefined('wa-qr-code').then(() => {
          input.value = qrCode.value;
          input.addEventListener('input', () => (qrCode.value = input.value));
        });
      </script>

      <style>
        .qr-overview {
          max-width: 256px;
        }

        .qr-overview wa-input {
          margin-top: 1rem;
        }
      </style>

</section>

  <!-- Divider -->
  <section class="mb-5">
      <div style="text-align: center;">
        Divider - above
        <wa-divider style="--spacing: 2rem; --color: tomato;"></wa-divider>
        Divider - Below
      </div>
    </section>


<section class="mb-5">
    <h2>Split Panel</h2>
    <div class="split-panel-divider">
      <wa-split-panel>
        <wa-icon slot="divider" name="grip-vertical" variant="solid"></wa-icon>
        <div
          slot="start"
          style="
            height: 200px;
            background: var(--wa-color-surface-lowered);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          "
        >
          Start
        </div>
        <div
          slot="end"
          style="
            height: 200px;
            background: var(--wa-color-surface-lowered);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          "
        >
          End
        </div>
      </wa-split-panel>
    </div>

    <style>
      .split-panel-divider wa-split-panel {
        --divider-width: 4px;
      }

      .split-panel-divider wa-split-panel::part(divider) {
        background-color: var(--wa-color-red-50);
      }

      .split-panel-divider wa-icon {
        position: absolute;
        border-radius: var(--wa-border-radius-l);
        background: var(--wa-color-red-50);
        color: white;
        padding: 0.5rem 0.25rem;
      }

      .split-panel-divider wa-split-panel::part(divider):focus-visible {
        background-color: var(--wa-color-blue-50);
      }

      .split-panel-divider wa-split-panel:focus-within wa-icon {
        background-color: var(--wa-color-blue-50);
        color: white;
      }
    </style>
</section>

  <!-- Divider -->
  <section class="mb-5">
      <div style="text-align: center;">
        Divider - above
        <wa-divider style="--spacing: 2rem; --color: tomato;"></wa-divider>
        Divider - Below
      </div>
    </section>


<section class="mb-5">
      <wa-tab-group active="advanced">
        <wa-tab panel="general">General</wa-tab>
        <wa-tab panel="custom">Custom</wa-tab>
        <wa-tab panel="advanced">Advanced</wa-tab>

        <wa-tab-panel name="general">This is the general tab panel.</wa-tab-panel>
        <wa-tab-panel name="custom">This is the custom tab panel.</wa-tab-panel>
        <wa-tab-panel name="advanced">This is the advanced tab panel.</wa-tab-panel>
      </wa-tab-group>
</section>



    <!-- Divider -->
  <section class="mb-5">
      <div style="text-align: center;">
        Divider - above
        <wa-divider style="--spacing: 2rem; --color: tomato;"></wa-divider>
        Divider - Below
      </div>
    </section>

    <section class="mb-5">
      <div class="wa-stack">
        <p>
          <wa-tag variant="brand" appearance="accent">Accent</wa-tag>
          <wa-tag variant="brand" appearance="filled outlined">Filled + Outlined</wa-tag>
          <wa-tag variant="brand" appearance="filled">Filled</wa-tag>
          <wa-tag variant="brand" appearance="outlined">Outlined</wa-tag>

        </p>
        <p>
          <wa-tag variant="success" appearance="accent">Accent</wa-tag>
          <wa-tag variant="success" appearance="filled outlined">Filled + Outlined</wa-tag>
          <wa-tag variant="success" appearance="filled">Filled</wa-tag>
          <wa-tag variant="success" appearance="outlined">Outlined</wa-tag>
        </p>

        <p>
          <wa-tag variant="neutral" appearance="accent">Accent</wa-tag>
          <wa-tag variant="neutral" appearance="filled outlined">Filled + Outlined</wa-tag>
          <wa-tag variant="neutral" appearance="filled">Filled</wa-tag>
          <wa-tag variant="neutral" appearance="outlined">Outlined</wa-tag>
        </p>

        <p>
          <wa-tag variant="warning" appearance="accent">Accent</wa-tag>
          <wa-tag variant="warning" appearance="filled outlined">Filled + Outlined</wa-tag>
          <wa-tag variant="warning" appearance="filled">Filled</wa-tag>
          <wa-tag variant="warning" appearance="outlined">Outlined</wa-tag>
        </p>

        <p>
          <wa-tag variant="danger" appearance="accent">Accent</wa-tag>
          <wa-tag variant="danger" appearance="filled outlined">Filled + Outlined</wa-tag>
          <wa-tag variant="danger" appearance="filled">Filled</wa-tag>
          <wa-tag variant="danger" appearance="outlined">Outlined</wa-tag>
        </p>
      </div>
    </section>

</main>

<?php
get_footer();
