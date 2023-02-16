import React from "react";
import "./category.scss";
import catImg1 from '../../images/category1.webp'
import catImg2 from '../../images/category2.webp'
import catImg3 from '../../images/category3.webp'
const Category = () => {
  return (
    <div>
      <div className='categorycarousel'>
        <div id='carouselExampleIndicators' class='carousel slide'>
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <div className='carouselimg1'></div>
            </div>
            <div class='carousel-item'>
              <div className='carouselimg2'></div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <div className='category'>
        <div className="category__img">
          <img alt='' src={catImg1} />
          <p>All Series</p>
        </div>
        <div className="category__img">
          <img alt='' src={catImg2} />
          <p>ZenFone</p>
        </div>
        <div className="category__img">
          <img alt='' src={catImg3} />
          <p>ROG Phone</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
