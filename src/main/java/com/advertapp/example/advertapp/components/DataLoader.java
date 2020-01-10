package com.advertapp.example.advertapp.components;

import com.advertapp.example.advertapp.models.Advert;
import com.advertapp.example.advertapp.models.Category;
import com.advertapp.example.advertapp.models.Seller;
import com.advertapp.example.advertapp.repositories.AdvertRepository;
import com.advertapp.example.advertapp.repositories.CategoryRepository;
import com.advertapp.example.advertapp.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AdvertRepository advertRepository;

    @Autowired
    SellerRepository sellerRepository;

    @Autowired
    CategoryRepository categoryRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Seller seller1 = new Seller("Kevin", "07768129008", "kevin@kevinshouse.com");
        sellerRepository.save(seller1);

        Seller seller2 = new Seller("Lisa", "07989651266", "lisa@lisashouse.com");
        sellerRepository.save(seller2);

        Seller seller3 = new Seller("Brian", "07730909733", "brian@brianswork.com");
        sellerRepository.save(seller3);

        Seller seller4 = new Seller("Mary", "01314451213", "mary@gmail.com");
        sellerRepository.save(seller4);

        Seller seller5 = new Seller("John", "07744576517", "john@johnsnameisjohn.com");
        sellerRepository.save(seller5);

        Advert advert1 = new Advert("Macbook repairs", "one-off-payment", new Date(), false, 20, seller1);
        advertRepository.save(advert1);

        Advert advert2 = new Advert("Dodgy DVDs", "complete knock-offs", new Date(), false, 5, seller2);
        advertRepository.save(advert2);

        Advert advert3 = new Advert("Yoga and stuff", "not too hippy-dippy", new Date(), false, 0, seller1);
        advertRepository.save(advert3);

        Advert advert4 = new Advert("Volvo for sale", "It's nice and big and red", new Date(), false, 2000, seller3);
        advertRepository.save(advert4);

        Advert advert5 = new Advert("Tech support needed", "full-time position", new Date(), true, 0, seller5);
        advertRepository.save(advert5);

        Advert advert6 = new Advert("Software Developer wanted", "competitive salary", new Date(), false, 0, seller5);
        advertRepository.save(advert6);

        Category category1 = new Category("entertainment");
        categoryRepository.save(category1);

        Category category2 = new Category("jobs");
        categoryRepository.save(category2);

        Category category3 = new Category("transport");
        categoryRepository.save(category3);

        category1.addAdvert(advert2);
        category1.addAdvert(advert3);
        categoryRepository.save(category1);

        category2.addAdvert(advert5);
        category2.addAdvert(advert6);
        categoryRepository.save(category2);


    }

    }
