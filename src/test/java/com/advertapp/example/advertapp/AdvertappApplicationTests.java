package com.advertapp.example.advertapp;
import com.advertapp.example.advertapp.models.Advert;
import com.advertapp.example.advertapp.models.Category;
import com.advertapp.example.advertapp.models.Seller;
import com.advertapp.example.advertapp.repositories.AdvertRepository;
import com.advertapp.example.advertapp.repositories.CategoryRepository;
import com.advertapp.example.advertapp.repositories.SellerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;


@SpringBootTest
class AdvertappApplicationTests {

	@Autowired
	SellerRepository sellerRepository;

	@Autowired
	AdvertRepository advertRepository;

	@Autowired
	CategoryRepository categoryRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void createSeller() {
		Seller seller1 = new Seller("John");
		sellerRepository.save(seller1);
	}

	@Test
	public void createAdvertAndSeller() {
		Seller seller2 = new Seller("Steve");
		sellerRepository.save(seller2);

		Advert advert1 = new Advert("Bike for sale", "brand new", new Date(), false, 35, seller2);
		advertRepository.save(advert1);
	}

	@Test
	public void createCategoryAndAdverts() {

		Seller seller3 = new Seller("Susan");
		sellerRepository.save(seller3);

		Category category1 = new Category("vehicles");
		categoryRepository.save(category1);

		Advert advert2 = new Advert("Ballet lessons available", "start in March", new Date(), false, 25, seller3);
		advertRepository.save(advert2);

		category1.addAdvert(advert2);
		categoryRepository.save(category1);


	}

}
