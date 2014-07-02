class HighScoresController < ApplicationController
  # GET /high_scores
  # GET /high_scores.json
  def index
    @high_scores = HighScore.all

    render json: @high_scores
  end

  # GET /high_scores/1
  # GET /high_scores/1.json
  def show
    @high_score = HighScore.find(params[:id])

    render json: @high_score
  end

  # POST /high_scores
  # POST /high_scores.json
  def create
    @high_score = HighScore.new(params[:high_score])

    if @high_score.save
      render json: @high_score, status: :created, location: @high_score
    else
      render json: @high_score.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /high_scores/1
  # PATCH/PUT /high_scores/1.json
  def update
    @high_score = HighScore.find(params[:id])

    if @high_score.update(params[:high_score])
      head :no_content
    else
      render json: @high_score.errors, status: :unprocessable_entity
    end
  end

  # DELETE /high_scores/1
  # DELETE /high_scores/1.json
  def destroy
    @high_score = HighScore.find(params[:id])
    @high_score.destroy

    head :no_content
  end
end
