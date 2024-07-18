import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.setProducts([
      // Hiking
      {
        id: 0,
        name: 'Mountain Boots',
        description: 'Sturdy boots for all types of hiking trails.',
        category: 'hiking',
        imageUrl:
          'https://i5.walmartimages.com/seo/KEEN-Ridge-Flex-Mid-Waterproof-Hiking-Boots-for-Ladies-Timberwolf-Brick-Dust-9-5M_7964b8b9-ed7c-45df-9479-ba7529510d9b.baaae64ffbf3579460d162dcc449f410.png',
      },
      {
        id: 1,
        name: 'Hiking Backpack',
        description: 'Spacious backpack with multiple compartments.',
        category: 'hiking',
        imageUrl:
          'https://dk0fkjygbn9vu.cloudfront.net/cache-buster-11720308114/deuter/mediaroom/product-images/backpacks/hiking-backpacks/145725/image-thumb__145725__deuter_product-img/3440521-3452-Trail30_marine_shale-D-00.png',
      },
      {
        id: 2,
        name: 'Trekking Poles',
        description: 'Lightweight and adjustable trekking poles.',
        category: 'hiking',
        imageUrl:
          'https://www.cmpsport.com/media/catalog/product/cache/dde5c6f0a08275b7f48abf4f38d896f7/3/B/3B36297_B870_A_FOT_ECO_2.png',
      },
      {
        id: 3,
        name: 'Waterproof Jacket',
        description: 'Durable jacket for protection against rain and wind.',
        category: 'hiking',
        imageUrl:
          'https://emea.mizuno.com/dw/image/v2/BDBS_PRD/on/demandware.static/-/Sites-masterCatalog_Mizuno/default/dw3e06ba4a/AW22/Apparel/SJ2GE254063_FNT.png?sw=900&sh=900',
      },
      {
        id: 4,
        name: 'GPS Device',
        description: 'Reliable GPS for safe hiking adventures.',
        category: 'hiking',
        imageUrl:
          'https://5.imimg.com/data5/WC/JA/MY-46752175/gps-navigation-system.png',
      },

      // Camping
      {
        id: 5,
        name: '4-Person Tent',
        description: 'Spacious and easy-to-setup tent for family camping.',
        category: 'camping',
        imageUrl:
          'https://assets.basspro.com/image/list/fn_select:jq:first(.%5B%5D%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2974670.json',
      },
      {
        id: 6,
        name: 'Camping Stove',
        description: 'Portable stove for cooking meals at the campsite.',
        category: 'camping',
        imageUrl:
          'https://newellbrands.imgix.net/1e249d58-d318-31d2-bf3b-04128ea2826d/1e249d58-d318-31d2-bf3b-04128ea2826d.png?auto=format,compress&w=2000&h=2000',
      },
      {
        id: 7,
        name: 'Sleeping Bag',
        description: 'Warm and comfortable sleeping bag for cold nights.',
        category: 'camping',
        imageUrl:
          'https://marvel-b1-cdn.bc0a.com/f00000000200509/images.salsify.com/image/upload/s--xP6VYNTy--/ktt7y4hhamhfbzu2ajzi.png',
      },
      {
        id: 8,
        name: 'Camping Lantern',
        description: 'Bright lantern to illuminate your campsite.',
        category: 'camping',
        imageUrl:
          'https://www.dorcy.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/1/41-3103_packaged_front_new_lantern_bulk.png',
      },
      {
        id: 9,
        name: 'Portable Cooler',
        description: 'Keeps your food and drinks cold while camping.',
        category: 'camping',
        imageUrl:
          'https://www.truma.com/wp-content/uploads/truma-product-cooler-c69-dual-zone-2400x2400-1.webp',
      },

      // Climbing
      {
        id: 10,
        name: 'Climbing Rope',
        description: 'Strong and durable rope for safe climbing.',
        category: 'climbing',
        imageUrl:
          'https://www.gatepro.it/756-large_default/rope-for-climbing.jpg',
      },
      {
        id: 11,
        name: 'Climbing Harness',
        description: 'Comfortable harness for secure climbing.',
        category: 'climbing',
        imageUrl:
          'https://leomountaingear360.b-cdn.net/7018/climbing-technology-tami-light-high-altitude-ski-mountaineering-mountaineering-harness.jpg?t=1224',
      },
      {
        id: 12,
        name: 'Climbing Shoes',
        description: 'High-performance shoes for all types of climbing.',
        category: 'climbing',
        imageUrl:
          'https://www.unparallelsports.com/wp-content/uploads/2021/02/2859037110.png',
      },
      {
        id: 13,
        name: 'Chalk Bag',
        description: 'Bag to keep your chalk handy during climbs.',
        category: 'climbing',
        imageUrl:
          'https://dk0fkjygbn9vu.cloudfront.net/cache-buster-11720310776/deuter/mediaroom/product-images/accessories/climbing-accessories/58456/image-thumb__58456__deuter_product-img/3391322-4514-GravityChalkBagI_graphitemountain-redwood-D-00.png',
      },
      {
        id: 14,
        name: 'Carabiners Set',
        description: 'A set of reliable carabiners for various uses.',
        category: 'climbing',
        imageUrl:
          'https://leomountaingear360.b-cdn.net/5016-large_default/black-diamond-litewire-set-6-carabiner.jpg?t=1224',
      },

      // Water Sports
      {
        id: 15,
        name: 'Kayak',
        description: 'Lightweight and durable kayak for water adventures.',
        category: 'water_sports',
        imageUrl:
          'https://www.nootica.it/media/wysiwyg/description_html/Kayak/Kayak_bateau_gonflable/264887/blackfoot-160-34-1-1.png',
      },
      {
        id: 16,
        name: 'Life Jacket',
        description: 'Essential life jacket for safety in the water.',
        category: 'water_sports',
        imageUrl:
          'https://remixtechnologies.com/v3/wp-content/uploads/2020/02/stearnsLifeJacket.png',
      },
      {
        id: 17,
        name: 'Paddle',
        description: 'Ergonomic paddle for kayaking and other water sports.',
        category: 'water_sports',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/5/52/Raft_paddle.png',
      },
      {
        id: 18,
        name: 'Snorkeling Set',
        description: 'Complete set for underwater exploration.',
        category: 'water_sports',
        imageUrl:
          'https://www.upsalentodiving.it/wp-content/uploads/2024/04/Screenshot-2024-04-22-alle-16.19.15-Photoroom.png-Photoroom.png',
      },
      {
        id: 19,
        name: 'Waterproof Camera',
        description: 'Capture your water adventures with this durable camera.',
        category: 'water_sports',
        imageUrl:
          'https://www.panasonic.com/content/dam/pim/au/en/DM/DMC-FT/DMC-FT30GN/blue-DMC-FT30GN-Variation_Image_for_See_All_1Global-1_au_en.png',
      },
    ]);
  }
}
