package com.advertapp.example.advertapp.projections;
import com.advertapp.example.advertapp.models.Advert;
import com.advertapp.example.advertapp.models.Seller;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedAdvertsInSeller", types = Seller.class)
public interface EmbedAdvertsInSeller {
    String getName();
    String getPhoneNumber();
    String getEmail();
    List getAdverts();

}
