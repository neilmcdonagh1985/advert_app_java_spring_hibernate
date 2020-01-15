package com.advertapp.example.advertapp.repositories;

import com.advertapp.example.advertapp.models.Advert;

import java.util.List;

public interface AdvertRepositoryCustom {
    List<Advert> findAdvertsThatHaveCategoryNamed(String categoryName);

    List<Advert> findAdvertsThatHaveSellerNamed(String sellerName);
}
