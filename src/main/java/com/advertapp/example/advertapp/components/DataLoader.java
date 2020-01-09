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
        Seller seller1 = new Seller("Kevin");
        sellerRepository.save(seller1);

        Seller seller2 = new Seller("Lisa");
        sellerRepository.save(seller2);

        Advert advert1 = new Advert("Macbook repairs", seller1);
        advertRepository.save(advert1);

        Advert advert2 = new Advert("Dodgy DVDs", seller2);
        advertRepository.save(advert2);

        Advert advert3 = new Advert("Yoga and stuff", seller1);
        advertRepository.save(advert3);

        Category category1 = new Category("entertainment");
        categoryRepository.save(category1);

        category1.addAdvert(advert2);
        category1.addAdvert(advert3);
        categoryRepository.save(category1);


    }

    }
