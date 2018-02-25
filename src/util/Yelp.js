const apiKey = aL_p75zY6cU7nfg-uZrqgRqLz-LYjjQP2E3CAlPfnIJPmCw76MGZp2KwX7ct6-ZQXu_S9gzwnu64GqyhPnMbM_47zyUia0G1_1Y3jiItXMXRk6EZS6q0Xz3KYYiSWnYx;

const yelp = {
  search(term, location, sortBy){
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + term + '&location=' + location + '&sort_by=' + sortBy, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response =>  {

      return response.json()
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.category,
          rating: business.rating,
          reviewCount: business.review_count
        });
      }
    });
  }
};
export default Yelp;
