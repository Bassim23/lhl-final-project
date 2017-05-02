class ParticipationsController < ApplicationController
  before_action :set_participation, only: [:show, :edit, :update, :destroy]

  # GET /participations
  # GET /participations.json
  def index

  # @user = User.find(params[:id])
  # @participations = User.left_outer_joins(trips: [:schedules, schedules: [:participations, participations: [:user]]]).find(params[:user_id])
  @participations = User.includes(trips: [:schedules, schedules: [:participations, participations: [:user]]]).find(params[:user_id])
  puts @participations.inspect
  puts @participations.trips.inspect
  #Because there is only one trip but there are multiple trips. We need to define one trip.
  puts @participations.trips[0].schedules.inspect
  @participation = User.left_outer_joins(trips: [:schedules]).joins(participations: [:user]).find(params[:user_id])

  # User.left_outer_joins(trips: [:schedules, schedules: [:participations]]).find(1)

  # User.all.select("users.id AS creatorID, users.first_name as creatorName").joins(:participations)
  # @user.select("id AS creatorID, first_name as creatorName").joins("INNER JOIN participations ON participations.user_id = user.id")

  #select all users (joining participation table on user id) where (schedule id = user(params id).trips.schedule.id )
  # @user = User.all
  # @user.joins("INNER JOIN participations ON participations.user_id = users.id").where(users.participations.schedule_id = Users.find(params[:id]).trips.schedules.id)

  end

  # GET /participations/1
  # GET /participations/1.json
  def show
    @participation = Participation.find(params[:id])
  end

  # GET /participations/new
  def new
    @participation = Participation.new
  end

  # GET /participations/1/edit
  def edit
  end

  # POST /participations
  # POST /participations.json
  def create
    @participation = Participation.new(participation_params)
    @participation.user_id = current_user.id
    @participation.save
  end

  # PATCH/PUT /participations/1
  # PATCH/PUT /participations/1.json
  def update
    respond_to do |format|
      if @participation.update(participation_params)
        format.html { redirect_to @participation, notice: 'Participation was successfully updated.' }
        format.json { render :show, status: :ok, location: @participation }
      else
        format.html { render :edit }
        format.json { render json: @participation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /participations/1
  # DELETE /participations/1.json
  def destroy
    @participation.destroy
    respond_to do |format|
      format.html { redirect_to trips_path, notice: 'Participation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_participation
      @participation = Participation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def participation_params
      params.permit(:schedule_id)
    end
end
