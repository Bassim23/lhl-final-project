class SearchController < ApplicationController

  def show
    @schedule = Schedule.search(params[:id])

    render json: @schedule.as_json(include: [:trip, trip: {include: :user}])
  end

end
