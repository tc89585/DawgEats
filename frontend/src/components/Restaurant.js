import React from 'react';
import '../styles/Restaurant.css';

export default function Restaurant({ name, image, description, onClick }) {
  return (
    <div class="card" onClick={onClick}>
      <div class="image-container">
        <img class="restaurant-image" src={image} alt="restaurant logo" />
      </div>
      <div class="content">
        <span class="title">{name}</span>

        <p class="desc">{description}</p>

        <a href="" class="action">
          Find out more
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
