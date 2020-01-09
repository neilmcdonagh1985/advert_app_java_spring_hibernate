package com.advertapp.example.advertapp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="categories")
public class Category {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @Column(name="category_name")
    private String categoryName;

    @JsonIgnoreProperties(value = "categories")
    @ManyToMany
    @JoinTable(
            name = "advert_category",
            joinColumns = { @JoinColumn(
                    name = "category_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = { @JoinColumn(
                    name = "advert_id",
                    nullable = false,
                    updatable = false
            )}
    )
    private List<Advert> adverts;

    public Category(String categoryName) {
        this.categoryName = categoryName;
        this.adverts = new ArrayList<>();

    }

    public Category() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setName(String categoryName) {
        this.categoryName = categoryName;
    }

    public List<Advert> getAdverts() {
        return adverts;
    }

    public void setAdverts(List<Advert> adverts) {
        this.adverts = adverts;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public void addAdvert(Advert advert) {
        this.adverts.add(advert);
    }
}
