package com.advertapp.example.advertapp.projections;
import com.advertapp.example.advertapp.models.Category;
import org.springframework.data.rest.core.config.Projection;
import java.util.List;

@Projection(name = "embedAdverts", types = Category.class)
public interface EmbedAdverts {
    String getCategoryName();
    List getAdverts();

}
