# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rat1 = Rating.create(title: "Good!", description: "Pretty solid cupcake experience, would suggest to a friend.", value: 4)
rat2 = Rating.create(title: "Not too shabby!", description: "awesome cupcake with 100 perc real sugar - must-eat!", value: 5)


ratings1 = [rat1, rat2]

cup1 = Cupcake.create(title: "Vanilla Cream Cupcake", text: "The best cupcake to get in NYC", thumbnail: "http://localhost:3000/images/cup1.jpg", ratings: ratings1, weight: 120)
cup2 = Cupcake.create(title: "Chocolate Cream", text: "Mixed Flavours of cocoa, toffee and a slight hint of cinnamon", thumbnail: "http://localhost:3000/images/cup2.jpg", ratings: ratings1, weight: 120)
cup3 = Cupcake.create(title: "Salted Peanutbutter Cupcake", text: "Our favorite Chocolate Peanutbutter best sell", thumbnail: "http://localhost:3000/images/cup3.jpg", ratings: ratings1, weight: 130)
