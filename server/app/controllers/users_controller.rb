class UsersController < ApplicationController

  def new
    @age = (18..75).to_a
    @nationality = [
      'Afghan',
      'Albanian',
      'Algerian',
      'American',
      'Andorran',
      'Angolan',
      'Antiguans',
      'Argentinean',
      'Armenian',
      'Australian',
      'Austrian',
      'Azerbaijani',
      'Bahamian',
      'Bahraini',
      'Bangladeshi',
      'Barbadian',
      'Barbudans',
      'Batswana',
      'Belarusian',
      'Belgian',
      'Belizean',
      'Beninese',
      'Bhutanese',
      'Bolivian',
      'Bosnian',
      'Brazilian',
      'British',
      'Bruneian',
      'Bulgarian',
      'Burkinabe',
      'Burmese',
      'Burundian',
      'Cambodian',
      'Cameroonian',
      'Canadian',
      'Cape Verdean',
      'Central African',
      'Chadian',
      'Chilean',
      'Chinese',
      'Colombian',
      'Comoran',
      'Congolese',
      'Costa Rican',
      'Croatian',
      'Cuban',
      'Cypriot',
      'Czech',
      'Danish',
      'Djibouti',
      'Dominican',
      'Dutch',
      'East Timorese',
      'Ecuadorean',
      'Egyptian',
      'Emirian',
      'Equatorial Guinean',
      'Eritrean',
      'Estonian',
      'Ethiopian',
      'Fijian',
      'Filipino',
      'Finnish',
      'French',
      'Gabonese',
      'Gambian',
      'Georgian',
      'German',
      'Ghanaian',
      'Greek',
      'Grenadian',
      'Guatemalan',
      'Guinea-Bissauan',
      'Guinean',
      'Guyanese',
      'Haitian',
      'Herzegovinian',
      'Honduran',
      'Hungarian',
      'I-Kiribati',
      'Icelander',
      'Indian',
      'Indonesian',
      'Iranian',
      'Iraqi',
      'Irish',
      'Israeli',
      'Italian',
      'Ivorian',
      'Jamaican',
      'Japanese',
      'Jordanian',
      'Kazakhstani',
      'Kenyan',
      'Kittian and Nevisian',
      'Kuwaiti',
      'Kyrgyz',
      'Laotian',
      'Latvian',
      'Lebanese',
      'Liberian',
      'Libyan',
      'Liechtensteiner',
      'Lithuanian',
      'Luxembourger',
      'Macedonian',
      'Malagasy',
      'Malawian',
      'Malaysian',
      'Maldivan',
      'Malian',
      'Maltese',
      'Marshallese',
      'Mauritanian',
      'Mauritian',
      'Mexican',
      'Micronesian',
      'Moldovan',
      'Monacan',
      'Mongolian',
      'Moroccan',
      'Mosotho',
      'Motswana',
      'Mozambican',
      'Namibian',
      'Nauruan',
      'Nepalese',
      'New Zealander',
      'Nicaraguan',
      'Nigerian',
      'Nigerien',
      'North Korean',
      'Northern Irish',
      'Norwegian',
      'Omani',
      'Pakistani',
      'Palauan',
      'Panamanian',
      'Papua New Guinean',
      'Paraguayan',
      'Peruvian',
      'Polish',
      'Portuguese',
      'Qatari',
      'Romanian',
      'Russian',
      'Rwandan',
      'Saint Lucian',
      'Salvadoran',
      'Samoan',
      'San Marinese',
      'Sao Tomean',
      'Saudi',
      'Scottish',
      'Senegalese',
      'Serbian',
      'Seychellois',
      'Sierra Leonean',
      'Singaporean',
      'Slovakian',
      'Slovenian',
      'Solomon Islander',
      'Somali',
      'South African',
      'South Korean',
      'Spanish',
      'Sri Lankan',
      'Sudanese',
      'Surinamer',
      'Swazi',
      'Swedish',
      'Swiss',
      'Syrian',
      'Taiwanese',
      'Tajik',
      'Tanzanian',
      'Thai',
      'Togolese',
      'Tongan',
      'Trinidadian/Tobagonian',
      'Tunisian',
      'Turkish',
      'Tuvaluan',
      'Ugandan',
      'Ukrainian',
      'Uruguayan',
      'Uzbekistani',
      'Venezuelan',
      'Vietnamese',
      'Welsh',
      'Yemenite',
      'Zambian',
      'Zimbabwean'
    ]
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

  def show
    @user = User.find params[:id]
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