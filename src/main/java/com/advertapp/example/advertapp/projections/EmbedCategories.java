package com.advertapp.example.advertapp.projections;

import com.advertapp.example.advertapp.models.Advert;
import com.advertapp.example.advertapp.models.Seller;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedCategories", types = Advert.class)
public interface EmbedCategories {
    String getDescription();
    List getCategories();

}
