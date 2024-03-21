import { createServer, Model } from "miragejs"


createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Blue Origin", price: 650000 , description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/00CA/production/_121220200_blueorigin.jpg.webp", type: "Orbit" , hostId: "123"})
        server.create("van", { id: "2", name: "Moon Base", price: 800000, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://t4.ftcdn.net/jpg/05/88/35/95/360_F_588359586_2Hooy4EGoRVDqIDS2htOdQqBK0IYLEqR.jpg", type: "moon" , hostId: "123"})
        server.create("van", { id: "3", name: "Mars Base", price: 13000000, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://miro.medium.com/v2/resize:fit:1358/0*54Bu1HH3ZoEPRjqm.jpg", type: "mars" , hostId: "456"})
        server.create("van", { id: "4", name: "ISS", price: 620000, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://images-assets.nasa.gov/image/iss056e201248/iss056e201248~large.jpg?w=1536&h=1024&fit=crop&crop=faces%2Cfocalpoint", type: "orbit" , hostId: "789"})
        server.create("van", { id: "5", name: "Jaxa", price: 520000, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://iss.jaxa.jp/en/kibo/about/images/s134e010585_ll.jpg", type: "orbit" , hostId: "789"})
        server.create("van", { id: "6", name: "Tiangong", price: 700000, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://cdn.mos.cms.futurecdn.net/RdV4BJCVXhYEgpT2vtRyUU-1200-80.jpg", type: "orbit" , hostId: "123"})
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 2000

        this.get("/vans", (schema, request) => {
            return new Response(400, {}, {error: "Error fetching data"})
            // return schema.vans.all()
        })

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            // Hard-code the hostId for now
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })
    }

    
})