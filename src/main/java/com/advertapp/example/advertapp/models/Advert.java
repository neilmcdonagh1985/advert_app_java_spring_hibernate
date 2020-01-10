package com.advertapp.example.advertapp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="adverts")
public class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="date_listed")
    private Date dateListed;

    @Column(name="urgent_or_not")
    private Boolean urgentOrNot;

    @Column(name="price")
    private int price;

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

    public Advert(String title, String description, Date dateListed, Boolean urgentOrNot, int price, Seller seller) {
        this.title = title;
        this.description = description;
        this.dateListed = dateListed;
        this.urgentOrNot = urgentOrNot;
        this.price = price;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDateListed() {
        return dateListed;
    }

    public void setDateListed(Date dateListed) {
        this.dateListed = dateListed;
    }

    public Boolean getUrgentOrNot() {
        return urgentOrNot;
    }

    public void setUrgentOrNot(Boolean urgentOrNot) {
        this.urgentOrNot = urgentOrNot;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
