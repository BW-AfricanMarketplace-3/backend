<h1>African Marketplace Endpoints and Info</h1>

<h2>Deployed root API Location</h2>
<a href="http://africanmarketplace.ddns.net:5000/" target="_blank">http://africanmarketplace.ddns.net:5000/</a>
<h2>Front End Testing Login<h2>
<h3>Username: testing</h3>
<h3>Password: testpass</h3>
<h2>Registration and Login</h2>
<h3>Register:</h3>
<p>/api/auth/register</p>
<h3>Expects an object like:</h3> 
<p>{</p>
    <p>"username": "JohnDoe",</p>
    <p>"password": "mypassword",</p>
    <p>"profile_pic_url": "http://www.example/image.jpg" (not required)</p>
}
<br>
<h3>Login:</h3>
<p>/api/auth/login</p>
<h3>Expects an object like:</h3> 
<p>{</p>
	<p>"username": "JohnDoe",</p>
	<p>"password": "mypassword"</p>
<p>}</p>
<br>
<h2>Average pricelist endpoints.</h2>
<h3>Get average price list:</h3>
<p>/api/prices (requires token)</p>
<h3>Post to average price list:</h3>
<p>/api/prices (requires token)</p>
<h3>Expects an object like:</h3>
<p>{</p>
	<p>"product_cat": "Meat",</p>
	<p>"sub_category": "Chicken",</p>
	<p>"product": "Hen",</p>
	<p>"avg_price": 35</p>
<p>}</p>
<h3>Delete from average price list:</h3>
<p>/api/prices/:id (requires token)</p>
<br>
<h2>Listing endpoints.<h2>
<h3>GET all listings:</h3>
<p>/api/listings</p>
<h3>Get Listing by id</h3>
<p>/api/listings/:id</p>
<br>
<h2>User Specific Listing Endpoints</h2>
<h3>Get listings created by the user:</h3>
<p>/api/users/:id/listings (requires token)</p>
<h3>Post a new listing:</h3>
<p>/api/users/:id/listings (requires token)</p>
<h3>Expects an object like:</h3>
<p>{</p>
	<p>"location": "Sudan",</p>
    <p>"item": "Wild Rice",</p>
    <p>"description": "Comes in 400g sacks",</p>
    <p>"price": 10</p>
<p>}</p>

<h3>Update a listing creatd by the user:</h3>
<p>/api/users/:id/listings/:id (requires token)</p>
<h3>Expects an object like:</h3>
<p>{</p>
	<p>"user_id": "2",</p>
	<p>"location": "Sudan",</p>
    <p>"item": "Wild Rice",</p>
    <p>"description": "Comes in 500g sacks",</p>
    <p>"price": 10</p>
<p>}</p>
<h3>Delete listing created by the user: (requires token)</h3>
<p>/api/users/:id/listings/:id</p>