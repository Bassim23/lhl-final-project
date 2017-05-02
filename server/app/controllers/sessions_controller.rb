class SessionsController < ApplicationController

  def new
  end

  def create
    if user = User.authenticate_with_credentials(params[:session][:email], params[:session][:password])
      cookies.encrypted[:user_id] = user.id
      redirect_to :back
    else
      flash[:notice] = "Oops, email or password is invalid. Please try again."
      redirect_to :back
    end
  end

  def destroy
    cookies.encrypted[:user_id] = nil
    redirect_to root_path
  end

end