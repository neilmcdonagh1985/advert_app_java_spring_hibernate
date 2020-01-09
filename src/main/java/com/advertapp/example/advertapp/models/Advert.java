package com.advertapp.example.advertapp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="adverts")
public class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="description")
    private String description;

    @JsonIgnoreProperties("adverts")
    @ManyToOne
    @JoinColumn(name="seller_id", nullable = false)
    private Seller seller;


    @JsonIgnoreProperties(value = "adverts")
    @ManyToMany
    @JoinTable(
            name = "advert_category",
            joinColumns = { @JoinColumn(
                    name = "advert_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = { @JoinColumn(
                    name = "category_id",
                    nullable = false,
                    updatable = false
            )}
    )
    private List<Category> categories;

    public Advert(String description, Seller seller) {
        this.description = description;
        this.seller = seller;
        this.categories = new ArrayList<>();
    }

    public Advert() {

    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;

    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    public void addCategory(Category category) {
        this.categories.add(category);
    }
}
