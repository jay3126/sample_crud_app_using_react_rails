# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

x = 1

100.times {
	User.create!(first_name: "Dummy First Name #{x}", last_name: "Dummy Last Name #{x}", mobile_number: 123456, phone_number: 9876666)
	x = x + 1
}