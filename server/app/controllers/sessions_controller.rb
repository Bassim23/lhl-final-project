class SessionsController < ApplicationController

  def new
  end

  def create
    if user = User.authenticate_with_credentials(params[:session][:email], params[:session][:password])
      session[:user_id] = user.id
      redirect_to :back
    else
      flash[:notice] = "Oops, email or password is invalid. Please try again."
      render partial: "sessions/new", :class => "login-modal-toggle", :remote => true, "data-target" => "#login-modal"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end