class UsersController < ApplicationController

  def new
  end

  def create
    new_user = create_user
    if new_user
      session[:user_id] = new_user.id
      redirect_to root_path
    else
      redirect_to :back
    end
  end

  private

  def create_user
    user = params[:user]
    first_name = user[:first_name]
    last_name = user[:last_name]
    age = user[:age]
    gender = user[:gender]
    nationality = user[:nationality]
    email = user[:email]
    summary = user[:summary]
    password = user[:password]
    password_confirmation = user[:password_confirmation]
    if first_name.blank? || last_name.blank?
      message = "Oops! Please enter a first name and last name."
    elsif age.blank?
      message = "Oops! Please enter your age."
    elsif gender.blank?
      message = "Oops! Please enter your gender."
    elsif nationality.blank?
      message = "Oops! Please enter your nationality."
    elsif email.blank?
      message = "Oops! Please enter a valid email."
    elsif password.blank? || password_confirmation.blank?
      message = "Oops! Please enter a valid password."
    elsif password.length < 5
      message = "Oops! Please enter a password with a at least 5 characters."
    elsif password != password_confirmation
      message = "Oops! Passwords don't match. Please try again."
    elsif User.exists?(email: email)
      message = "Oops! E-mail already exists. Please try again or log in with your existing email."
    end
    if message
      flash[:notice] = message
      return
    end
    new_user = User.new(
      first_name: first_name,
      last_name: last_name,
      age: age,
      gender: gender,
      nationality: nationality,
      email: email,
      summary: summary,
      password: password,
      password_confirmation: password_confirmation,
      upvotes: 0,
      downvotes: 0
    )
    new_user.save!
    new_user
  end

end