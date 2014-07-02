require 'spec_helper'
require 'rails_helper'
require 'rspec_api_documentation/dsl'

resource "High Score", type: :controller do
	header "Accept", "application/json"
	
  get "/high_scores/:id" do
    let(:high_score) { HighScore.create(game: 'settlers of catan', score: 200) }
    let(:id) { high_score.id }

    example "Get a high_score", :document => :public do
      do_request

      expect(status).to eq(200)
    end
  end
end
