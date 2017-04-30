# MovieHub
MovieHub backend inhert from repo/webBootstrap

## package
* koa2
* *sequelize* (mysql)


## Restful API

### System
Currently without Session Auth
#### <span style="color:#5fba7d">post</span> /login
> #### req example:
> ```
> {
>	"cusname": name,
>	"cuspassword": password
> }
>```
> #### res:
> * 200 Success
> * 201 Failed
> * 400 Error

#### <span style="color:#5fba7d">post</span> /register
> #### req example:
> ```
> {
>	"cusname": name,
>	"cusemail": email,
>	"cuspassword": password,
>	"cusPortraitUrl": url
> }
>```
> #### res:
> * 200 Success
> * 400 Error

### Customer

#### <span style="color:#5fba7d">post</span> /db/addCustomer
> #### req example:
> ```
> {
>	"cusname": name,
>	"cusemail": email,
>	"cuspassword": password,
>	"cusPortraitUrl": url
> }
>```
> #### res:
> * 200 Success
> * 400 Error

#### <span style="color:#5fba7d">post</span> /db/updateCustomerPassword

> #### req example:
> ```
> {
>	"cusname": name,
>	"cuspassword": password,
> }
>```
> #### res:
> * 200 Success
> * 205 Unmatched or Same Password
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">post</span> /db/updateCustomerPortraitUrl

> #### req example:
> ```
> {
>	"cusname": name
> }
>```
> #### res:
> * 200 Success
> * 205 Unmatched
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">post</span> /db/deleteCustomer
> #### req example:
> ```
> {
>	"cusname": name
>	"cusPortraitUrl": url
> }
>```
> #### res:
> * 200 Success
> * 205 Unmatched
> * 400 Error
> 
>##### message

### Movie

#### <span style="color:#5fba7d">post</span> /db/addMovie
> #### req example:
> ```
> {
>	"movid": movid,
>	"movname": movie name,
>	"movyear": movie year(INT),
>	"genre": genre,
>  "director": director,
>  "description": description,
>  "movTrailerUrl": movTrailerUrl
>  "movScreenshotUrl": movScreenshotUrl
> }
>```
> #### res:
> * 200 Success
> * 400 Error
> 
> ##### message

#### <span style="color:#5fba7d">post</span> /db/findMovie

> #### req example:
> ```
> {
>	"movid": movid,
> }
>```
> #### res:
> * 200 Success
> * 205 Unmatched or Same Password
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">post</span> /db/deleteMovie

> #### req example:
> ```
> {
>	"movid": movid
> }
>```
> #### res:
> * 200 Success
> * 205 Unmatched
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">post</span> /db/updateMovie
> #### req example:
> ```
> {
>	"movid": movid (MUST)
>  "movname": movie name (OPTIONAL),
>   "movyear": movie year (OPTIONAL),
>   "
> }
>```
> #### res:
> * 200 Success
> * 205 Unmatched
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">get</span> /db/movieGenres
Return all Movie Genres
> #### res:
> * 200 Success
> * 205 Unmatched
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">post</span> /db/getMoviesByGenre
Return data orders by movid.</br>
Trick: When first time to fetch, movid=-1 can get movid > -1 rows. Then you can get every **count** number of rows by passing last movid</br>
Return not more than count number of rows data.
> #### req example:
> ```
> {
>	"movid": movid (MUST),
>   "genre": genre (MUST),
> 	"count": count(MUST)
> }
>```
> #### res:
> * 200 Success
> * 400 Error
> 
>##### instances

#### <span style="color:#5fba7d">post</span> /db/getNewestMovies
Return most recently **count** numbers movie by movyear.
> #### req example:
> ```
> {
> 	"count": count(MUST)
> }
>```
> #### res:
> * 200 Success
> * 400 Error
> 
>##### instances

### Rating

#### <span style="color:#5fba7d">post</span> /db/addRating
> #### req example:
> ```
> {
> 	"movid": movie id(MUST),
> 	"cusid": customer id(MUST),
>   "rating": rating (MUST, INT 0 - 10)
> }
>```
> #### res:
> * 200 Success
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">post</span> /db/deleteRating
> #### req example:
> ```
> {
> 	"movid": movie id(MUST),
> 	"cusid": customer id(MUST)
> }
>```
> #### res:
> * 200 Success
> * 205 Unmatched
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">post</span> /db/updateRating
> #### req example:
> ```
> {
> 	"movid": movie id(MUST),
> 	"cusid": customer id(MUST),
> 	"rating": rating(MUST, INT 0-10)
> }
>```
> #### res:
> * 200 Success
> * 205 Unmatched Or still same rating
> * 400 Error
> 
>##### message

#### <span style="color:#5fba7d">post</span> /db/groupRatingByMovie
Return all ratings of a movie using Group By. </br>
You can use this to get 0-10 rating total and calculate average rating.
> #### req example:
> ```
> {
> 	"movid": movie id(MUST),
> 	"rating": rating(MUST, INT 0-10)
> }
>```
> #### res:
> * 200 Success
> * 400 Error
> 
>##### instances

#### <span style="color:#5fba7d">post</span> /db/getRecommendMovies
Return recommend movies according userId.
> #### req example:
> ```
> {
> 	"userId": User Id(MUST)
> }
>```
> #### res:
> * 200 Success
> * 400 Error
> 
>##### instances