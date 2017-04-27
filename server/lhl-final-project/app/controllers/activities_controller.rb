class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show, :edit, :update, :destroy]

  # GET /activities
  # GET /activities.json
  def index
    @activities = Activity.all
  end

  # GET /activities/1
  # GET /activities/1.json
  def show
    @activity = Activity.find(params[:id])
  end

  # GET /activities/new
  def new
    @activity = Activity.new
  end

  # GET /activities/1/edit
  def edit
  end

  # POST /activities
  # POST /activities.json
  def create
    if params[:events].nil?
    else
      params[:events].each do |e|
        if Activity.exists?(uuid: params[:events][e][:id])
          @activity = Activity.find_by uuid: params[:events][e][:id]
          @activity.update({
            start_time: params[:events][e][:start],
            end_time: params[:events][e][:end],
          })
          next
        else
          @activity = Activity.new({
            start_time: params[:events][e][:start],
            end_time: params[:events][e][:end],
            uuid: params[:events][e][:id],
            name: params[:events][e][:name],
            place: params[:events][e][:google_id],
            schedule_id: params[:schedule_id]
          })
        end
      end
    end
  end

  def update

  end

  # DELETE /activities/1
  # DELETE /activities/1.json
  def destroy
    if Activity.exists?(uuid: params[:id])
      @activity = Activity.find_by(uuid: params[:id])
      @activity.destroy
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = Activity.where(uuid: params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def activity_params
      params.fetch(:activity, {})
    end
end
