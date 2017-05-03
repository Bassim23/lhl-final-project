class ParticipationsController < ApplicationController
  before_action :set_participation, only: [:show, :edit, :update, :destroy]

  # GET /participations
  # GET /participations.json
  def index
    @participations = User.includes(trips: [:schedules, schedules: [:participations, participations: [:user]]]).find(params[:user_id])
    @participation = User.left_outer_joins(trips: [:schedules]).joins(participations: [:user]).find(params[:user_id])
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
    @participation = Participation.find(params[:id])
    @participation.update( status: params[:status])
  end

  # DELETE /participations/1
  # DELETE /participations/1.json
  def destroy
    @participation.destroy
    respond_to do |format|
      format.html { redirect_to trips_path }
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
