package com.advertapp.example.advertapp.repositories;
import com.advertapp.example.advertapp.models.Category;
import com.advertapp.example.advertapp.projections.EmbedAdverts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedAdverts.class)
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
