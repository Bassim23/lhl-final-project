# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170422201418) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.time     "start_time"
    t.time     "end_time"
    t.string   "name"
    t.text     "description"
    t.string   "place"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "schedule_id"
    t.index ["schedule_id"], name: "index_activities_on_schedule_id", using: :btree
  end

  create_table "participations", force: :cascade do |t|
    t.string   "status"
    t.integer  "activity_id"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["activity_id"], name: "index_participations_on_activity_id", using: :btree
    t.index ["user_id"], name: "index_participations_on_user_id", using: :btree
  end

  create_table "schedules", force: :cascade do |t|
    t.date     "date"
    t.string   "destination"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "trip_id"
    t.index ["trip_id"], name: "index_schedules_on_trip_id", using: :btree
  end

  create_table "trips", force: :cascade do |t|
    t.string   "name"
    t.string   "type"
    t.text     "summary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.index ["user_id"], name: "index_trips_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "age"
    t.string   "gender"
    t.string   "nationality"
    t.string   "email"
    t.text     "photo"
    t.integer  "upvotes"
    t.integer  "downvotes"
    t.text     "summary"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "activities", "schedules"
  add_foreign_key "participations", "activities"
  add_foreign_key "participations", "users"
  add_foreign_key "schedules", "trips"
  add_foreign_key "trips", "users"
end
