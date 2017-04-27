class SearchController < ApplicationController

  def show
    @schedule = Schedule.search(params[:id])

    render json: @schedule.as_json(include: [:trip, trip: {include: :user}])
    # render json: @schedule.search.as_json(include: [:trip, trip: {include: user}])
  end

end
