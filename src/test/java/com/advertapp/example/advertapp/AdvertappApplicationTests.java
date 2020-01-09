package com.advertapp.example.advertapp;
import com.advertapp.example.advertapp.models.Advert;
import com.advertapp.example.advertapp.models.Seller;
import com.advertapp.example.advertapp.repositories.AdvertRepository;
import com.advertapp.example.advertapp.repositories.SellerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


@SpringBootTest
class AdvertappApplicationTests {

	@Autowired
	SellerRepository sellerRepository;

	@Autowired
	AdvertRepository advertRepository;

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

		Advert advert1 = new Advert("Bike for sale", seller2);
		advertRepository.save(advert1);
	}

}
