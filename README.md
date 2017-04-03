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

