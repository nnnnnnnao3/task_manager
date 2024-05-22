class TasksController < ApplicationController
  before_action :authenticate_user!
  def index
    @tasks = current_user.tasks
  end

  def new
    @task = Task.new
  end

  def create
    task_params_with_json = task_params
    task_params_with_json[:description] = build_json_description(params[:task][:completed], params[:task][:description])
    @task = current_user.tasks.build(task_params_with_json)
    if @task.save
      redirect_to tasks_path, notice: 'Task was successfully created.'
    else
      render :new
    end
end
end
