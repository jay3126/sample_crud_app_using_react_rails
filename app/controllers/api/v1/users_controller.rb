class Api::V1::UsersController < Api::V1::BaseController

	def index
		# render json: {
		# 	users: User.paginate(page: page).order("created_at DESC"),
		# 	page: page,
		# 	pages: User.pages
		# 	}
		respond_with User.all.order("created_at DESC")
	end

	def create
		respond_with :api, :v1, User.create(user_params)
	end

	def destroy
		respond_with User.destroy(params[:id])
	end

	def update
		user = User.find(params["id"])
		user.update_attributes(user_params)
		respond_with user, json: user
	end

	private

	def user_params
		params.require(:user).permit(:id, :first_name, :last_name, :mobile_number, :phone_number)
	end

	def page
		params[:page] || 1
	end
end