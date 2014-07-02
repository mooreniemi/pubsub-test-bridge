require "rails_helper"

RSpec.describe HighScoresController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/high_scores").to route_to("high_scores#index")
    end

    it "routes to #show" do
      expect(:get => "/high_scores/1").to route_to("high_scores#show", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/high_scores").to route_to("high_scores#create")
    end

    it "routes to #update" do
      expect(:put => "/high_scores/1").to route_to("high_scores#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/high_scores/1").to route_to("high_scores#destroy", :id => "1")
    end

  end
end
