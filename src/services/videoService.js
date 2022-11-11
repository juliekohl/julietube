import {createClient} from "@supabase/supabase-js";

const PROJECT_URL = "https://hovkdjosmlbmcvompmds.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmtkam9zbWxibWN2b21wbWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjY5ODUsImV4cCI6MTk4Mzc0Mjk4NX0.wKdr29kUR4bHUkGxhbYvQdoxMn6FSI2WqclmRns24Qo";
const supabase = createClient(PROJECT_URL, API_KEY);

export function videoService() {
  return {
      getAllVideos() {
          return supabase.from("video")
              .select("*")
      }
  }
};
